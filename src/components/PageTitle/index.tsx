import Head from 'next/head';

interface Props {
  title: string;
  description?: string;
}

export function PageTitle({
  title,
  description
}: Props) {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Head>
  );
}