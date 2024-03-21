'use client';
import { AppContext } from "@/AppContext";
import { StartersArea1 } from "@/components/StartersArea1";
import { StartersArea2 } from "@/components/StartersArea2";
import { useContext } from "react";

export default function Starters() {
	const { areaShowing } = useContext(AppContext);

	return (
		<>
			{
				areaShowing == 'startersArea1' && (
					<StartersArea1/>
				)
			}
			{
				areaShowing == 'startersArea2' && (
					<StartersArea2/>
				)
			}
		</>
	);
}
