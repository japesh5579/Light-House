import fs from "node:fs";
import path from "node:path";
import { TildaBody } from "@/components/TildaBody";
import { YttCurriculumBento } from "@/components/YttCurriculumBento";

const SPLIT_MARKER = "<!--YTT_BENTO_SPLIT-->";

export default function Home() {
  const bodyHtml = fs.readFileSync(
    path.join(process.cwd(), "src/content/tilda-body.html"),
    "utf8"
  );

  const [beforeYtt, afterYtt] = bodyHtml.split(SPLIT_MARKER);

  return (
    <>
      <TildaBody html={beforeYtt} />
      <YttCurriculumBento />
      <TildaBody html={afterYtt} />
    </>
  );
}
