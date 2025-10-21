import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../../features/styles/ticTacToe'
import TictacToePosition from '../../components/atom/tictacToePosition'

const TicTacToe = () => {
    const [boardPositions, setBoardPositions] = useState<Array<Array<string>>>(
        [['🐧', '🐧', '🐧'],
        ['🐧', '🐧', '🐧'],
        ['🐧', '🐧', '🐧']])

    const [win, setWin] = useState(false)
    const [draw, setDraw] = useState(false)
    const [currentPlayer, setCurrentPlayer] = useState<'⭕' | '❌'>('⭕')

    const winCombinations = [
        // horizontal
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        // vertical
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        // diagonal
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]],
    ];

    const checkWin = (newBoard:Array<Array<string>>) => {
        let zeroPositions = [];
        let xPositions = [];

        // Collect player positions
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let element = newBoard[i][j];
                if (element === '⭕') {
                    zeroPositions.push([i, j]);
                } else if (element === '❌') {
                    xPositions.push([i, j]);
                }
            }
        }

        // Helper function: check if player covers all cells of a win combo
        const hasWon = (playerPositions: number[][], combination: number[][]) => {
            return combination.every(([x, y]) =>
                playerPositions.some(([px, py]) => px === x && py === y)
            );
        };

        // Check each winning combination
        for (let combo of winCombinations) {
            if (hasWon(zeroPositions, combo)) {
                Alert.alert('⭕ wins!');
                setWin(true)
                return '⭕';
            }
            if (hasWon(xPositions, combo)) {
                Alert.alert('❌ wins!');
                setWin(true)
                return '❌';
            }
        }

        // If board is full and no winner → Draw
        const isDraw = newBoard.flat().every(cell => cell === '❌' || cell === '⭕');
        if (isDraw) {
            Alert.alert('It’s a draw!');
            setDraw(true)
            return 'draw';
        }

        return null;
    };



    const handlePositionClick = (positionIndex: [number, number]) => {
        if (currentPlayer == '⭕') {
            setCurrentPlayer('❌')
            setBoardPositions((prev) => {
                const newBoard = prev.map(row => [...row]);
                newBoard[positionIndex[0]][positionIndex[1]] = '⭕';
                checkWin(newBoard);
                return newBoard;
            })
        }
        else {
            Alert.alert("It's not ⭕ turn")
        }
    }

    const fillXPosition = (auto:boolean=false) => {
        if (currentPlayer == '❌' || auto) {
            setCurrentPlayer('⭕')
            const randomBoardPosition = [Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)];
            const checkForVaccantPosition = boardPositions.flat().includes('🐧')
            console.log(randomBoardPosition)
            if ((boardPositions[randomBoardPosition[0]][randomBoardPosition[1]] == '🐧')) {
                setBoardPositions((prev) => {
                    const newBoard = prev.map(row => [...row]); // deep copy
                    newBoard[randomBoardPosition[0]][randomBoardPosition[1]] = '❌';
                    checkWin(newBoard);
                    return newBoard;
                })
                return null;
            }
            else if (checkForVaccantPosition) {
                fillXPosition();
            }
            else {
                checkWin(boardPositions);
                return null;
            }
        }
        else {
            Alert.alert("It's not fucking ❌ turn")
        }
    }

    const reset = () => {
        setBoardPositions([['🐧', '🐧', '🐧'],
        ['🐧', '🐧', '🐧'],
        ['🐧', '🐧', '🐧']])
        setCurrentPlayer('⭕')
        setWin(false)
        setDraw(false)
    }

    const disableLogic = !(boardPositions[0][0] == '🐧') && !win && !draw

    return (
        <View style={{ alignItems: 'center' }}>
            <View style={{ alignItems: 'center', marginBottom: 10 }}>
                <Text style={styles.title}>Tic Tac Toe ✖ 0️⃣</Text>
            </View>
            <View style={styles.container}>

                <TouchableOpacity style={styles.btn} onPress={() => {
                    fillXPosition()
                }}>
                    <Text style={styles.btnText}>Fill   ✖   Positions</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.btn, backgroundColor: '#3f607bff' }} onPress={() => {
                    reset()
                }}>
                    <Text style={styles.btnText}>Reset Board</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.board}>
                <TictacToePosition
                    disable={disableLogic}
                    positionIndex={[0, 0]}
                    symbol={boardPositions[0][0]}
                    clickPosition={() => {
                        handlePositionClick([0, 0])
                    }} />
                <TictacToePosition
                    disable={disableLogic}
                    positionIndex={[0, 1]}
                    symbol={boardPositions[0][1]}
                    clickPosition={() => {
                        handlePositionClick([0, 1])
                    }} />
                <TictacToePosition
                    disable={disableLogic}
                    positionIndex={[0, 2]}
                    symbol={boardPositions[0][2]}
                    clickPosition={() => {
                        handlePositionClick([0, 2])
                    }} />
                <TictacToePosition
                    disable={disableLogic}
                    positionIndex={[1, 0]}
                    symbol={boardPositions[1][0]}
                    clickPosition={() => {
                        handlePositionClick([1, 0])
                    }} />
                <TictacToePosition
                    disable={disableLogic}
                    positionIndex={[1, 1]}
                    symbol={boardPositions[1][1]}
                    clickPosition={() => {
                        handlePositionClick([1, 1])
                    }} />
                <TictacToePosition
                    disable={disableLogic}
                    positionIndex={[1, 2]}
                    symbol={boardPositions[1][2]}
                    clickPosition={() => {
                        handlePositionClick([1, 2])
                    }} />
                <TictacToePosition
                    disable={disableLogic}
                    positionIndex={[2, 0]}
                    symbol={boardPositions[2][0]}
                    clickPosition={() => {
                        handlePositionClick([2, 0])
                    }} />
                <TictacToePosition
                    disable={disableLogic}
                    positionIndex={[2, 1]}
                    symbol={boardPositions[2][1]}
                    clickPosition={() => {
                        handlePositionClick([2, 1])
                    }} />
                <TictacToePosition
                    disable={disableLogic}
                    positionIndex={[2, 2]}
                    symbol={boardPositions[2][2]}
                    clickPosition={() => {
                        handlePositionClick([2, 2])
                    }} />
            </View>
        </View>
    )
}

export default TicTacToe
