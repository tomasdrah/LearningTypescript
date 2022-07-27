import * as esbuild from 'https://deno.land/x/esbuild@v0.14.50/mod.js'


let result = await esbuild.build({
    entryPoints: ["./example.ts"],
    outfile: "./result.js",
    format: "",
    bundle: true,
    // minify: true,
    sourcemap: true,
    // watch: {
    //     onRebuild(error, result) {
    //         if (error) console.error("watch build failed:", error);
    //         else console.log("watch build succeeded:", result);
    //     },
    // },
})
// const ts = 'let test: boolean = true'
// const result = await esbuild.transform(ts, { loader: 'ts' })
console.log('result:', result)
esbuild.stop()
let a = 0


/*

esbuild
  .build({
    entryPoints: ["./src/mod.ts"],
    outfile: "./dist/bundle.js",
    format: "esm",
    bundle: true,
    // minify: true,
    sourcemap: true,
    watch: {
      onRebuild(error, result) {
        if (error) console.error("watch build failed:", error);
        else console.log("watch build succeeded:", result);
      },
    },
  })
  .then((result, error) => {})
  .catch(() => process.exit(1));


*/