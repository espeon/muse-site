import { source } from '@/app/(docs)/source';
import type { Metadata } from 'next';
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
 
export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = source.getPage(params.slug);
  if (!page) notFound();
 
  const MDX = page.data.body;
 
  return (
    <DocsPage toc={page.data.toc} full={page.data.full}
    tableOfContent={{
      style: 'clerk',
      single: false,
    }}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  );
}
 
export async function generateStaticParams() {
  return source.generateParams();
}
 
export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = source.getPage(params.slug);
 
  if (!page) notFound();
 
  return {
    title: page.data.title,
  } satisfies Metadata;
}