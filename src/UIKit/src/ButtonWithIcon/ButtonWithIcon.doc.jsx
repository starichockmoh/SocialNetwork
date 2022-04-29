import React from "react";
import { Page, ReactSpecimen } from "catalog";

import ButtonWithIcon from "./ButtonWithIcon";

export default function ButtonWithIconDocPage() {
  return (
    <Page>
      <section style={{ width: "100%" }}>
        <h2>Кнопка обычного размера</h2>

        <ReactSpecimen span={3} showSource>
          <ButtonWithIcon glyphNameLeft="AlignLeft" primary>
            Кнопка первичная с левым глифом
          </ButtonWithIcon>
        </ReactSpecimen>

        <ReactSpecimen span={3} showSource>
          <ButtonWithIcon glyphNameRight="AlignRight" primary>
            Кнопка первичная с правым глифом
          </ButtonWithIcon>
        </ReactSpecimen>

        <ReactSpecimen span={3} showSource>
          <ButtonWithIcon glyphNameLeft="AlignLeft" glyphNameRight="AlignRight">
            Кнопка с двумя глифами
          </ButtonWithIcon>
        </ReactSpecimen>
      </section>
      <section style={{ width: "100%" }}>
        <h2>Кнопка малого размера</h2>

        <ReactSpecimen span={3} showSource>
          <ButtonWithIcon
            glyphNameLeft="AlignLeft"
            className="button--small"
            primary
          >
            Кнопка первичная с левым глифом
          </ButtonWithIcon>
        </ReactSpecimen>

        <ReactSpecimen span={3} showSource>
          <ButtonWithIcon
            glyphNameRight="AlignRight"
            className="button--small"
            primary
          >
            Кнопка первичная с правым глифом
          </ButtonWithIcon>
        </ReactSpecimen>

        <ReactSpecimen span={3} showSource>
          <ButtonWithIcon
            glyphNameLeft="AlignLeft"
            className="button--small"
            glyphNameRight="AlignRight"
          >
            Кнопка с двумя глифами
          </ButtonWithIcon>
        </ReactSpecimen>
      </section>
      <section style={{ width: "100%" }}>
        <h2>Кнопка большого размера</h2>

        <ReactSpecimen span={3} showSource>
          <ButtonWithIcon
            glyphNameLeft="AlignLeft"
            className="button--big"
            primary
          >
            Кнопка первичная с левым глифом
          </ButtonWithIcon>
        </ReactSpecimen>

        <ReactSpecimen span={3} showSource>
          <ButtonWithIcon
            glyphNameRight="AlignRight"
            className="button--big"
            primary
          >
            Кнопка первичная с правым глифом
          </ButtonWithIcon>
        </ReactSpecimen>

        <ReactSpecimen span={3} showSource>
          <ButtonWithIcon
            glyphNameLeft="AlignLeft"
            className="button--big"
            glyphNameRight="AlignRight"
          >
            Кнопка с двумя глифами
          </ButtonWithIcon>
        </ReactSpecimen>
      </section>
      <section style={{ width: "100%" }}>
        <h2>Кнопка без текста</h2>

        <ReactSpecimen span={3} showSource>
          <ButtonWithIcon glyphNameLeft="AlignLeft" primary />
        </ReactSpecimen>

        <ReactSpecimen span={3} showSource>
          <ButtonWithIcon
            glyphNameLeft="AlignLeft"
            className="button--small"
            primary
          />
        </ReactSpecimen>

        <ReactSpecimen span={3} showSource>
          <ButtonWithIcon
            glyphNameLeft="AlignLeft"
            className="button--big"
            primary
          />
        </ReactSpecimen>
      </section>
    </Page>
  );
}
