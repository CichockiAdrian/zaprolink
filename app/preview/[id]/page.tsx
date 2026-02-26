import { notFound } from 'next/navigation';
import { templates } from '../../data/templateData';
import PreviewClient from '../../components/PreviewClient';

export async function generateStaticParams() {
  return Object.keys(templates).map((id) => ({ id }));
}

export default async function PreviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const template = templates[id];
  if (!template) notFound();
  return <PreviewClient template={template} />;
}