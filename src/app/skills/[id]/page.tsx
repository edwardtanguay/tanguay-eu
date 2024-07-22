'use client';
import * as appModel from '../../../models/model';
import * as qdat from '../../../qtools/qdat';
import '../../outline.scss';

export default function Page({ params }: { params: { id: string } }) {
   const { id } = params;
   const skill = appModel.skills.find(m => String(m.dpodId) === id);

   return (
      <>
         {skill && (
            <>
               <div className='border-slate-600 bg-gray-950 border p-5 mt-6'>
                  <div className="text-yellow-400 smallcaps text-md text-opacity-70">
                     SKILL:{' '}
                     {qdat.smartDateWithYear(skill.dpodWhenCreated)} -{' '}
                     {skill.category} {skill.subcategory}
                  </div>
                  <div className='text-2xl'>{skill.title}</div>
               </div>
               <textarea value="testing" className='text-black font-mono w-full h-[10rem] bg-gray-300' readOnly>
               </textarea>
               <div className='bg-slate-900 p-3 border-r border-b border-l border-slate-600'>
                  <div dangerouslySetInnerHTML={{ __html: skill.bodyHtml }}></div>
               </div>
            </>
         )}
      </>
   )
}