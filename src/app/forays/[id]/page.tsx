import * as appModel from '../../../appModel';
import * as qdat from '../../../qtools/qdat';
import '../../outline.scss';

export async function generateMetadata({ params }: { params: { id: string } }) {
   const { id } = params;
   const foray = appModel.forays.find(m => String(m.id) === id);
   const title = foray === undefined ? 'UNKNOWN' : `FORAY: ${foray.title}`;
   return {
      title,
      openGraph: {
         title,
         description: foray?.bodyDescription,
         images: ['https://tanguay-eu.vercel.app/images/siteIcon.png']
      }
   }
}

export default async function Page({ params }: { params: { id: string } }) {
   const { id } = params;
   const foray = appModel.forays.find(m => String(m.id) === id);

   return (
      <>
         {foray && (
            <>
               <div className='border-slate-600 bg-gray-950 border p-5 mt-6'>
                  <div className="text-yellow-400 smallcaps text-md text-opacity-70">
                     {qdat.smartDateWithYear(foray.systemWhenCreated)} -{' '}
                     <span dangerouslySetInnerHTML={{ __html: foray.category }}></span>
                  </div>
                  <div className='text-2xl'>{foray.title}</div>
               </div>
               <div className='bg-slate-900 p-3 border-r border-b border-l border-slate-600'>
                  <div dangerouslySetInnerHTML={{ __html: foray.bodyHtml }}></div>
               </div>
            </>
         )}
      </>
   )
}