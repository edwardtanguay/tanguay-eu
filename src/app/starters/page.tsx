'use client';
import { StartersArea1 } from "@/components/StartersArea1";
import { StartersArea2 } from "@/components/StartersArea2";
import { AreaShowing } from "@/interfaces";
import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export default function Starters() {
	const [areaShowing, setAreaShowing] = useState<AreaShowing>('startersArea1');

	const handleFlip = () => {
		const _areaShowing: AreaShowing = areaShowing === 'startersArea1' ? 'startersArea2' : 'startersArea1';
		setAreaShowing(_areaShowing);
	}

	return (
		<>
			{
				areaShowing == 'startersArea1' && (
					<StartersArea1 handleFlip={handleFlip} />
				)
			}
			{
				areaShowing == 'startersArea2' && (
					<StartersArea2 handleFlip={handleFlip} />
				)
			}
		</>
	);
}
