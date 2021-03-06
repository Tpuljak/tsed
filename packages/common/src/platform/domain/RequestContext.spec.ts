import {PlatformRequest, PlatformResponse, PlatformTest} from "@tsed/common";
import {expect} from "chai";
import {FakeRequest, FakeResponse} from "../../../../../test/helper";
import {RequestContext} from "./RequestContext";

describe("RequestContext", () => {
  beforeEach(() => PlatformTest.create());
  afterEach(() => PlatformTest.reset());
  it("should create a new Context", () => {
    const req: any = new FakeRequest();
    const res: any = new FakeResponse();
    // @ts-ignore
    const context = new RequestContext({
      id: "id",
      injector: PlatformTest.injector,
      response: new PlatformResponse(res),
      request: new PlatformRequest(req)
    });

    expect(context.id).to.eq("id");
    expect(context.dateStart).to.be.instanceof(Date);
    expect(context.container).to.be.instanceof(Map);
    expect(context.env).to.be.equal("test");
    expect(context.getRequest()).to.be.instanceof(FakeRequest);
    expect(context.getResponse()).to.be.instanceof(FakeResponse);
  });
});
