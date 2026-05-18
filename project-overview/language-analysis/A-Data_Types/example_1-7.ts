export {};

let flexible: any = 42;
flexible = "now a string";
flexible = true;

let safe: unknown = "hello";
if (typeof safe === "string") {
    console.log(safe.toUpperCase());
}