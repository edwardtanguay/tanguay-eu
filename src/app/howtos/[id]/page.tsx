'use client';
import * as appModel from '../../../models/model';
import * as qdat from '../../../qtools/qdat';
import '../../outline.scss';

// export async function generateMetadata({ params }: { params: { id: string } }) {
//    const { id } = params;
//    const howto = appModel.howtos.find(m => String(m.id) === id);
//    const title = howto === undefined ? 'UNKNOWN' : `HOWTO: ${howto.title}`;
//    return {
//       title,
//       openGraph: {
//          title,
//          description: howto?.bodyDescription,
//          images: ['https://tanguay-eu.vercel.app/images/siteIcon.png']
//       }
//    }
// }

export default function Page({ params }: { params: { id: string } }) {
   const { id } = params;
   const howto = appModel.howtos.find(m => String(m.id) === id);

   return (
      <>
         {howto && (
            <>
               <div className='border-slate-600 bg-gray-950 border p-5 mt-6'>
                  <div className="text-yellow-400 smallcaps text-md text-opacity-70">
                     HOWTO:{' '}
                     {qdat.smartDateWithYear(howto.systemWhenCreated)} -{' '}
                     <span dangerouslySetInnerHTML={{ __html: howto.category }}></span>
                  </div>
                  <div className='text-2xl'>{howto.title}</div>
               </div>
               <div className='bg-slate-900 p-3 border-r border-b border-l border-slate-600'>
                  <div dangerouslySetInnerHTML={{ __html: howto.bodyHtml }}></div>
               </div>
            </>
         )}
      </>
   )
}