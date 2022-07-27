(() => {
  // my_module.ts
  var MyModule = class {
    constructor(prop) {
      this.prop = prop;
    }
  };

  // example.ts
  var x = "hello";
  x += 15;
  console.log(x);
  var y = new MyModule("hi");
  var not_used_class_instance = new MyModule("hi");
  console.log(y);
})();
//# sourceMappingURL=result.js.map
