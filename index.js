export function setup({ onMessage, addMemory }) {
  onMessage(({ message, character }) => {
    if (!character?.name?.toLowerCase().includes("michael")) return;
    if (message.toLowerCase().includes("記住")) {
      addMemory(`Michael 已記住：${message}`);
    }
  });
}
