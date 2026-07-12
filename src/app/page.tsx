import fs from "node:fs";
import path from "node:path";
import { TildaBody } from "@/components/TildaBody";

export default function Home() {
  const bodyHtml = fs.readFileSync(
    path.join(process.cwd(), "src/content/tilda-body.html"),
    "utf8"
  );

  return <TildaBody html={bodyHtml} />;
}
