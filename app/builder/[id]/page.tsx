import Builder from '../../pages/Builder';

export default async function BuilderIdPage({ params }: { params: Promise<{ id: string }> }) {
  await params;
  return <Builder />;
}
