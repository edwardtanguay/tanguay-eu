'use client';
import { StartersArea2 } from "@/components/StartersArea2";
import { AreaShowing } from "@/interfaces";
import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export default function Starters() {
	const [areaShowing, setAreaShowing] = useState<AreaShowing>('startersArea2');

	return (
		<>
			{
				areaShowing == 'startersArea1' && (
					<div>area1</div>
				)
			}
			{
				areaShowing == 'startersArea2' && (
					<StartersArea2 />
				)
			}
		</>
	);
}
