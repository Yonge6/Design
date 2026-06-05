import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagePath = path.resolve(__dirname, "../english-quote-log/index.html");
const remotePageUrl = "https://raw.githubusercontent.com/Yonge6/Design/main/english-quote-log/index.html";

const quoteSets = [
  [
    {
      english: "Act as if what you do makes a difference. It does.",
      chinese: "行动吧，就像你的所作所为会带来改变一样。它确实会。",
      source: "William James"
    },
    {
      english: "The journey of a thousand miles begins with one step.",
      chinese: "千里之行，始于足下。",
      source: "Lao Tzu, Tao Te Ching"
    },
    {
      english: "Great things are not done by impulse, but by a series of small things brought together.",
      chinese: "伟大的事情不是靠一时冲动完成的，而是由一连串小事累积而成。",
      source: "Vincent van Gogh"
    }
  ],
  [
    {
      english: "You must be the change you wish to see in the world.",
      chinese: "你必须成为你希望在世界上看到的改变。",
      source: "Commonly attributed to Mahatma Gandhi"
    },
    {
      english: "It always seems impossible until it is done.",
      chinese: "在事情完成之前，它总是看起来不可能。",
      source: "Nelson Mandela"
    },
    {
      english: "Why do we fall? So we can learn to pick ourselves up.",
      chinese: "我们为什么跌倒？因为这样才能学会重新站起来。",
      source: "Thomas Wayne, Batman Begins"
    }
  ],
  [
    {
      english: "A person who never made a mistake never tried anything new.",
      chinese: "一个从不犯错的人，也从未尝试过任何新事物。",
      source: "Albert Einstein"
    },
    {
      english: "Don't let yesterday take up too much of today.",
      chinese: "不要让昨天占据今天太多的时间。",
      source: "Will Rogers"
    },
    {
      english: "The flower that blooms in adversity is the most rare and beautiful of all.",
      chinese: "在逆境中绽放的花，是最稀有也最美丽的花。",
      source: "The Emperor, Mulan"
    }
  ],
  [
    {
      english: "Whether you think you can, or you think you can't, you're right.",
      chinese: "无论你认为自己能，还是认为自己不能，你都是对的。",
      source: "Commonly attributed to Henry Ford"
    },
    {
      english: "No one can make you feel inferior without your consent.",
      chinese: "没有你的允许，没人能让你感到自卑。",
      source: "Eleanor Roosevelt"
    },
    {
      english: "There is no place like home.",
      chinese: "没有任何地方比得上家。",
      source: "Dorothy Gale, The Wizard of Oz"
    }
  ],
  [
    {
      english: "Believe you can and you're halfway there.",
      chinese: "相信自己能做到，你就已经成功了一半。",
      source: "Commonly attributed to Theodore Roosevelt"
    },
    {
      english: "The secret of getting ahead is getting started.",
      chinese: "领先的秘诀，就是先开始。",
      source: "Mark Twain"
    },
    {
      english: "Adventure is out there!",
      chinese: "冒险就在外面！",
      source: "Charles Muntz, Up"
    }
  ],
  [
    {
      english: "Turn your wounds into wisdom.",
      chinese: "把你的伤痛转化为智慧。",
      source: "Oprah Winfrey"
    },
    {
      english: "What we think, we become.",
      chinese: "我们的思想，塑造了我们会成为什么样的人。",
      source: "Commonly attributed to Buddha"
    },
    {
      english: "Some people are worth melting for.",
      chinese: "有些人值得你为他们融化。",
      source: "Olaf, Frozen"
    }
  ],
  [
    {
      english: "Energy and persistence conquer all things.",
      chinese: "精力和坚持可以征服一切。",
      source: "Benjamin Franklin"
    },
    {
      english: "Nothing will work unless you do.",
      chinese: "除非你行动，否则一切都不会奏效。",
      source: "Maya Angelou"
    },
    {
      english: "To infinity and beyond!",
      chinese: "飞向无限，超越极限！",
      source: "Buzz Lightyear, Toy Story"
    }
  ],
  [
    {
      english: "If you want to lift yourself up, lift up someone else.",
      chinese: "如果你想提升自己，就先去托举别人。",
      source: "Booker T. Washington"
    },
    {
      english: "The harder the conflict, the greater the triumph.",
      chinese: "冲突越艰难，胜利就越伟大。",
      source: "Thomas Paine"
    },
    {
      english: "Just keep swimming.",
      chinese: "继续游下去。",
      source: "Dory, Finding Nemo"
    }
  ]
];

function getShanghaiParts(date = new Date()) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
  return Object.fromEntries(formatter.formatToParts(date).map((part) => [part.type, part.value]));
}

function makeShanghaiTimestamp(date = new Date()) {
  const parts = getShanghaiParts(date);
  return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}+08:00`;
}

function makeRecordId(date = new Date()) {
  const parts = getShanghaiParts(date);
  return `scheduled-${parts.year}-${parts.month}-${parts.day}-${parts.hour}${parts.minute}`;
}

function indentRecord(record) {
  return JSON.stringify(record, null, 2)
    .split("\n")
    .map((line) => `      ${line}`)
    .join("\n");
}

if (!fs.existsSync(pagePath)) {
  const response = await fetch(remotePageUrl);
  if (!response.ok) {
    throw new Error(`Could not restore missing page: ${response.status} ${response.statusText}`);
  }
  fs.mkdirSync(path.dirname(pagePath), { recursive: true });
  fs.writeFileSync(pagePath, await response.text());
  console.log("Restored missing English quote page from GitHub.");
}

const html = fs.readFileSync(pagePath, "utf8");
const recordId = makeRecordId();

if (html.includes(`id: "${recordId}"`) || html.includes(`"id": "${recordId}"`)) {
  console.log(`Record ${recordId} already exists. No update needed.`);
  process.exit(0);
}

const existingRecordCount = (html.match(/\n\s*id:\s*"[^"]+"/g) || []).length
  + (html.match(/\n\s*"id":\s*"[^"]+"/g) || []).length;
const quotes = quoteSets[existingRecordCount % quoteSets.length];
const record = {
  id: recordId,
  time: makeShanghaiTimestamp(),
  quotes
};

const marker = "    const seedRecords = [\n";
if (!html.includes(marker)) {
  throw new Error("Could not find seedRecords marker in english-quote-log/index.html");
}

const nextHtml = html.replace(marker, `${marker}${indentRecord(record)},\n`);
fs.writeFileSync(pagePath, nextHtml);

console.log(`Added ${recordId} with 3 English quotes.`);
