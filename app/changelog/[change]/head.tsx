export default function Head({ params }) {
  const title = params.change + " - Tablane";
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </>
  );
}
