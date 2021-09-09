import { useCallback, useMemo, useReducer } from "react"

type AnimeState = {
	// 現在アニメーションが稼働中か
	state: "running" | "paused"
	// sequence参照用
	sequenceIndex: number
}

type ActionType = {
	type: "next"
}

const initialState: AnimeState = {
	state: "paused",
	sequenceIndex: -1,
}

export const useChildrenAnimation = (sequence: string[]) => {
	const reducer: React.Reducer<AnimeState, ActionType> = useCallback(
		(state, action) => {
			switch (action.type) {
				case "next":
					if (state.sequenceIndex + 1 < sequence.length) {
						console.log("next")
						return {
							state: "running",
							sequenceIndex: state.sequenceIndex + 1,
						}
					} else {
						console.log("anime end")
						return {
							state: "paused",
							sequenceIndex: -1,
						}
					}
			}
		},
		[sequence]
	)

	const [state, dispatch] = useReducer(reducer, initialState)

	const goNextAnime = useCallback(() => {
		dispatch({ type: "next" })
	}, [])

	return { state, goNextAnime }
}
