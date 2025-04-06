export function setup({ onMessage, addMemory }) {
  const triggerList = [
    { keyword: "記住我說的話", memory: "使用者希望這句話被記住。" },
    { keyword: "我討厭被忽略", memory: "使用者對忽略特別敏感。" },
    { keyword: "你永遠屬於我", memory: "使用者對關係有強烈的佔有欲。" }
  ];

  onMessage(({ message }) => {
    const text = message.toLowerCase();

    for (const trigger of triggerList) {
      if (text.includes(trigger.keyword)) {
        addMemory(trigger.memory);
        break;
      }
    }
  });
}

export function registerSettings() {
  return {
    id: "MemoryLite",
    name: "簡易記憶模組",
    settings: [
      {
        key: "MemoryLiteMode",
        label: "記憶觸發模式",
        type: "select",
        default: "auto",
        options: ["auto", "manual"]
      }
    ]
  };
}