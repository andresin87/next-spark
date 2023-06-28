"use client";
import { Button } from "@spark-ui/button";
import { Checkbox } from "@spark-ui/checkbox";
import { RadioGroup } from "@spark-ui/radio-group";
import { Switch } from "@spark-ui/switch";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex flex-col items-start justify-center p-24">
        <h1 className="text-display-1">Spark-ui</h1>
      </header>
      <main className="gap-md flex flex-wrap grow flex-row justify-evenly items-stretch">
        <div className="gap-md min-w-sz-320 flex flex-nowrap flex-col justify-center">
          <h1 className="text-headline-1">Heading</h1>
          <div className="text-body-1">Some text here</div>
          <div className="gap-lg inline-flex items-center">
            <RadioGroup defaultValue="1">
              <RadioGroup.Radio value="1"></RadioGroup.Radio>
            </RadioGroup>
            <Switch defaultChecked size="sm"></Switch>
            <Checkbox defaultChecked></Checkbox>
          </div>
        </div>
        <div className="gap-md min-w-sz-320 flex flex-nowrap flex-col justify-center">
          <Button intent="primary" design="filled">
            Hierarchy 1
          </Button>
          <Button design="filled">Hierarchy 2</Button>
          <Button design="outlined">Hierarchy 2</Button>
        </div>
      </main>
      <footer className="flex flex-nowrap justify-between">
        <div>Testing high-contrast approach</div>
        <nav className="flex flex-nowrap gap-sm">
          <Link href="?theme=light">Light</Link> |
          <Link href="?theme=dark">Dark</Link> |
          <Link href="?theme=leboncoin">Leboncoin</Link> |
          <Link href="?theme=leboncoin-pro">Leboncoin-pro</Link> |
          <Link href="?theme=kleinanzeigen">Kleinanzeigen</Link> |
          <Link href="?theme=subito">Subito</Link>
        </nav>
      </footer>
    </>
  );
}
