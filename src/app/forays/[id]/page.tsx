import { useEffect } from 'react';
import * as appModel from '../../../models/model';
import * as qdat from '../../../qtools/qdat';
import '../../outline.scss';
import * as config from '../../../config';

let siteMode = '';

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

   useEffect(() => {
      siteMode = config.siteMode();
   }, []);

   return (
      <>
         {foray && (
            <>
               <div className='border-slate-600 bg-[#222] border p-5 mt-6 font-mono'>
                  <div className="text-yellow-700 smallcaps text-md">
                     FORAY:{' '}
                     {qdat.smartDateWithYear(foray.systemWhenCreated)} -{' '}
                     {siteMode === 'development' && (
                        <span> <a target="_blank" href={`http://localhost:29900/manageForay?returnUrl=forays%C2%A7openItemIds=${foray.id}|id=${foray.id}&command=edit&id=${foray.id}`}>EDIT</a> - </span>
                     )}
                     <span dangerouslySetInnerHTML={{ __html: foray.category }}></span>
                  </div>
                  <div className='text-2xl'>{foray.title}</div>
               </div>
               <div className='bg-[#1a1a1a] p-3 border-r border-b border-l border-slate-600 font-mono itemForay'>
                  <div dangerouslySetInnerHTML={{ __html: foray.bodyHtml }}></div>
               </div>
            </>
         )}
      </>
   )
}