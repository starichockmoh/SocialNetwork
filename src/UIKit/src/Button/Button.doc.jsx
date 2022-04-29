import React from "react";
import { Page, ReactSpecimen } from "catalog";

import Button from "./Button";

export default function ButtonDocPage() {
  return (
    <Page>
      <section style={{ width: "100%" }}>
        <h2>Кнопка обычного размера</h2>

        <p>Часто используемый тип кнопки для запуска действий. Высота кнопки <code>30px</code>.</p>

        <ReactSpecimen span={3} showSource>
          <Button primary>Кнопка первичная</Button>
        </ReactSpecimen>
        <ReactSpecimen span={3} showSource>
          <Button primary disabled>
            Кнопка первичная отключенная
          </Button>
        </ReactSpecimen>
        <ReactSpecimen span={3} showSource>
          <Button>Кнопка вторичная</Button>
        </ReactSpecimen>
        <ReactSpecimen span={3} showSource>
          <Button disabled>Кнопка вторичная отключенная</Button>
        </ReactSpecimen>
      </section>
      <section style={{ width: "100%" }}>
        <h2>Кнопка малая</h2>

        <p>Кнопка с уменьшенными полями. Стиль задаётся добавление класса <code>.button--small</code>. Высота кнопки <code>24px</code>.</p>

        <ReactSpecimen span={3} showSource>
          <Button primary className="button--small">Малая первичная кнопка</Button>
        </ReactSpecimen>
        <ReactSpecimen span={3} showSource>
          <Button className="button--small">Малая кнопка</Button>
        </ReactSpecimen>
      </section>

      <section style={{ width: "100%" }}>
        <h2>Кнопка большая</h2>

        <p>Кнопка с увеличенными полями. Стиль задаётся добавление класса <code>.button--big</code>. Высота кнопки <code>40px</code>.</p>

        <ReactSpecimen span={3} showSource>
          <Button primary className="button--big">Большая первичная кнопка</Button>
        </ReactSpecimen>
        <ReactSpecimen span={3} showSource>
          <Button className="button--big">Большая кнопка</Button>
        </ReactSpecimen>
      </section>
    </Page>
  );
}
