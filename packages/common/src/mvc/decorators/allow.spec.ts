import {prototypeOf} from "@tsed/core";
import {expect} from "chai";
import * as Sinon from "sinon";
import {Allow} from "../../../src/mvc/decorators";
import {ParamMetadata} from "../models/ParamMetadata";
import {PropertyMetadata} from "../models/PropertyMetadata";

const sandbox = Sinon.createSandbox();
describe("Allow", () => {
  before(() => {
    sandbox.spy(PropertyMetadata, "get");
    sandbox.spy(ParamMetadata, "get");
  });
  after(() => sandbox.restore());

  describe("when decorator is used as param", () => {
    it("should called with the correct parameters", () => {
      // WHEN
      class Test {
        test(@Allow(null) test: string) {}
      }

      const metadata = ParamMetadata.get(prototypeOf(Test), "test", 0);
      // THEN
      expect(ParamMetadata.get).to.have.been.calledWithExactly(prototypeOf(Test), "test", 0);
      expect(metadata.allowedRequiredValues).to.deep.eq([null]);
    });
  });

  describe("when decorator is used as property", () => {
    it("should called with the correct parameters (string)", () => {
      // WHEN
      class Test {
        @Allow(null)
        test: string;
      }

      const metadata = PropertyMetadata.get(prototypeOf(Test), "test");

      // THEN
      expect(PropertyMetadata.get).to.have.been.calledWithExactly(prototypeOf(Test), "test");
      expect(metadata.allowedRequiredValues).to.deep.eq([null]);
      expect(metadata.schema.toJSON()).to.deep.eq({type: ["string", "null"]});
    });

    it("should called with the correct parameters (class)", () => {
      // WHEN
      class Children {}

      class Test {
        @Allow(null)
        test: Children;
      }

      const metadata = PropertyMetadata.get(prototypeOf(Test), "test");

      // THEN
      expect(PropertyMetadata.get).to.have.been.calledWithExactly(prototypeOf(Test), "test");
      expect(metadata.allowedRequiredValues).to.deep.eq([null]);
      expect(metadata.schema.toJSON()).to.deep.eq({
        oneOf: [
          {
            type: "null"
          },
          {
            $ref: "#/definitions/Children"
          }
        ]
      });
    });
  });

  describe("when decorator is used in another way", () => {
    it("should called with the correct parameters", () => {
      // WHEN
      let actualError: any;
      try {
        @Allow(null)
        class Test {
          test: string;
        }
      } catch (er) {
        actualError = er;
      }

      expect(actualError.message).to.deep.eq("Allow cannot be used as class decorator on Test");
    });
  });
});
