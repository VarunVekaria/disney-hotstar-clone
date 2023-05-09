/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styled from "styled-components";
import { ImageSlider } from "./ImageSlider";
import { NewDisney } from "./NewDisney";
import { Originals } from "./Originals";
import { Recommends } from "./Recommends";
import { Trending } from "./Trending";
import { Viewers } from "./Viewers";
import { useEffect } from "react";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
// import { doc } from "firebase/firestore";
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";

export const Home = () => {
	const dispatch = useDispatch();
	const username = useSelector(selectUserName);
	let recommends = [];
	let newDisneys = [];
	let originals = [];
	let trending = [];

	useEffect(() => {
		const q = query(collection(db, "movie"));
		onSnapshot(q, (snapshot) => {
			snapshot.docs.map((doc) => {
				// console.log(recommends);
				// console.log(doc.data);
				// eslint-disable-next-line default-case
				switch (doc.data().type) {
					case "recommend":
						// console.log(doc.data())
						// eslint-disable-next-line react-hooks/exhaustive-deps
						recommends = [...recommends, { id: doc.id, ...doc.data() }];
						// console.log(recommends);
						break;
					case "new":
						newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
						break;
					case "originals":
						originals = [...originals, { id: doc.id, ...doc.data() }];
						break;
					case "trending":
						trending = [...trending, { id: doc.id, ...doc.data() }];
						break;
				}
			});

			dispatch(
				setMovies({
					recommend: recommends,
					newDisney: newDisneys,
					originals: originals,
					trending: trending,
				})
			);
		});
	}, [username]);

	return (
		<Container>
			<ImageSlider />
			<Viewers />
			<Recommends />
			<NewDisney />
			<Originals />
			<Trending />
		</Container>
	);
};

const Container = styled.main`
	// color: yellow;
	position: relative;
	min-height: calc(100vh - 250px);
	overflow-x: hidden;
	display: block;
	top: 6px;
	padding: 0 calc(3.5vw + 5px);
	&:after {
		background: url("/images/home-background.png") center center / cover
			no-repeat fixed;
		content: "";
		position: absolute;
		inset: 0px;
		opacity: 1;
		z-index: -1;
	}
`;

// const Container = styled.main`
// 	position: relative;
// 	min-height: calc(100vh - 250px);
// 	overflow-x: hidden;
// 	display: block;
// 	top: 72px;
// 	padding: 0 calc(3.5vw + 5px);
// 	&:after {
// 		background: url("/images/home-background.png") center center / cover
// 			no-repeat fixed;
// 		content: "";
// 		position: absolute;
// 		inset: 0px;
// 		opacity: 1;
// 		z-index: -1;
// 	}
// `;
