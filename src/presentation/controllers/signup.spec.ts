import { SignUpController } from "./signup";
describe("Signup Controller", () => {
  test("Should return 400 if no name is provided", () => {
    const sut = new SignUpController();
    const httoRequest = {
      body: {
        email: "any_email@mail.com",
        password: "any_password",
        passwordConfirmatio: "ani_password",
      },
    };
    const httpResponse = sut.handle(httoRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error("Missing param: name"));
  });

  test("Should return 400 if no email is provided", () => {
    const sut = new SignUpController();
    const httoRequest = {
      body: {
        name: "any_name",
        password: "any_password",
        passwordConfirmatio: "any_password",
      },
    };
    const httpResponse = sut.handle(httoRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error("Missing param: email"));
  });
});
