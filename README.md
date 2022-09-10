# Welcome to SVG Chart Provider API 👋

## Try to access the follwing routes.

### SVG for the gallery page:

`BASE_URL/gallery?g1=1&g2=1&g3=1&g4=1&r=1`

### SVG for the idea`s page:

`BASE_URL/idea?g1=1&g2=1&g3=1&g4=1&r=1`

---

# Usage

-   Run `npm install` or `yard` to download the dependences.
-   Type `npm run dev` or `yarn dev` to run the application.
-   Acess `http://localhost:3000/gallery?g1=2&g2=3&g3=4&g4=1&r=16` or...
    `http://localhost:3000/idea?g1=2&g2=3&g3=4&g4=1&r=10`

---

## Optional parameters

### Base Shape Color `bg=`

It changes the color of the base shape, which is under the red shape.
Default: `cccccc`
`bg=cccccc`

### Colored Shape Color `red=`

It changes the color of the red shape.
Default: `ff0000`
`red=ff0000`

### Chart Size `size=`

It changes the size of the chart.
Default for Gallery Chart: `220`
Default for Idea Chart: `336`
`size=220`
