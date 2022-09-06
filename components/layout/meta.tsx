import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <meta
        content="width=device-width,initial-scale=1,viewport-fit=cover"
        name="viewport"
      />
      <meta name="description" content="Personal website of Surdu Nicolae" />

      {/* TODO: make this dynamic */}
      <meta name="theme-color" content="#fff" />

      <title>Nicu Surdu</title>

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
    </Head>
  );
}
