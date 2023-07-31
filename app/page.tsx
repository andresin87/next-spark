"use client";
import { Button } from "@spark-ui/button";
import { Checkbox } from "@spark-ui/checkbox";
import { RadioGroup } from "@spark-ui/radio-group";
import { Switch } from "@spark-ui/switch";
import { Tag } from "@spark-ui/tag";
import { Badge } from "@spark-ui/badge";
import { Spinner } from "@spark-ui/spinner";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const themeActive = searchParams.get("theme") || "default";
  const cxLink = (theme: string) =>
    theme === themeActive ? "font-bold underline" : "";
  return (
    <>
      <header className="flex flex-col items-start justify-center p-2xl bg-main">
        <h1 className="text-display-1 text-on-main">Spark-ui</h1>
      </header>
      <main className="gap-md flex flex-wrap grow flex-row justify-evenly items-stretch mx-2xl">
        <div className="gap-lg min-w-sz-320 flex flex-nowrap flex-col justify-center">
          <div className="inline-flex justify-between">
            <h1 className="text-headline-1">Heading</h1>
            <Tag intent="accent">New</Tag>
          </div>
          <div className="text-body-1">Some text here</div>
          <div className="gap-lg inline-flex items-center">
            <RadioGroup defaultValue="1">
              <RadioGroup.Radio value="1"></RadioGroup.Radio>
            </RadioGroup>
            <Switch defaultChecked size="sm"></Switch>
            <Checkbox defaultChecked></Checkbox>
          </div>
          <Badge>
            <Spinner />
          </Badge>
        </div>
        <div className="gap-md min-w-sz-320 flex flex-nowrap flex-col justify-center">
          <Button intent="main" design="filled">
            Hierarchy 1
          </Button>
          <Button design="filled" intent="support">
            Hierarchy 2
          </Button>
          <Button design="outlined" intent="support">
            Hierarchy 2
          </Button>
        </div>
      </main>
      <footer className="flex flex-nowrap justify-between p-2xl bg-surface-inverse text-on-surface-inverse">
        <div>Testing colours V2</div>
        <nav className="flex flex-nowrap gap-sm">
          <Link className={cxLink("light")} href="?theme=spark">
            spark
          </Link>{" "}
          |
          <Link className={cxLink("leboncoin")} href="?theme=leboncoin">
            Leboncoin
          </Link>{" "}
        </nav>
      </footer>
    </>
  );
}
