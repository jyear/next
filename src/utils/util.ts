export const parseBodyOnReq = async (req: any) => {
  const chunks = [];
  for await (const chunk of req.body) {
    chunks.push(chunk);
  }

  const uint8array = new Uint8Array(
    chunks.flatMap((chunk) => Array.from(chunk))
  );
  const decoder = new TextDecoder("utf-8");
  return decoder.decode(uint8array);
};
