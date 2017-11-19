describe("Application", function() {
  it("should work", function() {
    expect(true).toBe(true);
  });

  it("should have index page", function() {
    let app = new Application;
    expect(app.page).toBe("index");
  });
});
