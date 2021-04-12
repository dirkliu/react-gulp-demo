
const rollup = require("rollup")
const babel = require("rollup-plugin-babel")
const myTest = require('./myTest')

async function build() {
  // create a bundle
  const bundle = await rollup.rollup({
    input: "./src/index.js",
    plugins: [
      myTest({
        // include: '*.svg'
      }),
      babel({
        exclude: 'node_modules/**' // 只编译我们的源代码
      })
    ]
  })

  // generate code and a sourcemap
  const { code, map } = await bundle.generate({
    file: 'dist/bundle.js',
    format: "umd"
  })

  // or write the bundle to disk
  await bundle.write({
    file: 'dist/bundle.js',
    format: "umd"
  })
}

build()