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
               <div className='border-slate-600 bg-gray-700 border p-5 mt-6 font-mono'>
                  <div className="text-black smallcaps text-md text-opacity-70">
                     FORAY:{' '} 
                     {qdat.smartDateWithYear(foray.systemWhenCreated)} -{' '}
                     <span dangerouslySetInnerHTML={{ __html: foray.category }}></span>
                  </div>
                  <div className='text-2xl'>{foray.title}</div>
               </div>
               <div className='bg-black p-3 border-r border-b border-l border-slate-600'>
                  <div dangerouslySetInnerHTML={{ __html: foray.bodyHtml }}></div>
               </div>
            </>
         )}
      </>
   )
}