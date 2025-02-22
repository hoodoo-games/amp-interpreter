import { compile } from "./compiler";
import { AmpInterpreter } from "./interpreter";
import "./style.css";

function init() {
  const program = compile([src], { programName: "app" });
  const interpreter = new AmpInterpreter(program);
  interpreter.run();
}

const src = `
# ns dec
namespace Example:
    # type def
    type ExampleType: int n, num m

    type AnotherType:
        bool x,
        ExampleType example

    # node def
    node add:
        int a,
        int b,
        out int c

    # node impl
    impl add:
        int-add @add a b
        return int-add.sum

    # node instances
    a @new 10
    b @new { n: 42, m: 0 }
    _ add a b.val.n

namespace DroneFleet:
    type Part:
        Example.AnotherType t
`;

init();
