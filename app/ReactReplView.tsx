"use client"; // This is a client component
// from https://github.com/seamapi/react-repl/blob/main/src/ReactReplView.js
// converted with https://js2ts.com
import React, { useRef, useState, useEffect} from "react"
import styled from "styled-components"
//import type LineT from "./ReactReplJS";
import { ReactReplPropsT,LineT  } from "./ReactReplJS";
//let ReactReplView2: typeof FCReactReplJSPropsT;
				      
const Container = styled.div`
  font-family: monospace;
  font-weight: bold;
  color: #fff;
  background-color: #333;
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`
const InputCarat = styled.div`
  color: #f48fb1;
  padding-right: 8px;
`
const InputLine = styled.div`
  display: flex;
  margin-top: 8px;
`
const ActiveInputLine = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`
const Output = styled.div`
  color: #ccc;
  margin-top: 8px;
  white-space: pre-wrap;
`
const Error = styled.div`
  color: #d33;
  margin-top: 8px;
  white-space: pre-wrap;
`
const TextInput = styled.input`
  color: #fff;
  font-size: inherit;
  font-weight: bold;
  border: none;
  outline: none;
  flex-grow: 1;
  caret-color: #f48fb1;
  background-color: transparent;
  font-family: monospace;
`
const Header = styled.div`
  display: flex;
`
const Title = styled.div`
  flex-grow: 1;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  color: #888;
`
const Tabs = styled.div`
  display: flex;
  padding-bottom: 8px;
`
const Tab = styled.div`
  padding: 8px;
  padding-left: 14px;
  padding-right: 14px;
  background-color: #222;
  cursor: pointer;
  &.selected {
    background-color: #333;
    color: #64b5f6;
    cursor: auto;
  }
`
const TerminalContent = styled.div<{ height: number }>`
  padding: 16px;
  padding-top: 2px;
  height: ${(props) => props.height}px;
  overflow-y: auto;
`

// export interface Line {
//     type: 'input' | 'output' | 'error';
//     value: string;
// }
// export type Lines = Line[];

// export type ReactReplProps = { title?: string; stealFocus?: boolean; tabs?: string[]; selectedTab?: string;
// 			   //onChangeTab: (tab: string) => void;
// 			   onClear?: () => void;
// 			   //onSubmit: (input: string) => void;
// 			   lines: Lines; height: number; }

//let ReactReplView: typeof FCReactReplJSPropsT;

export function ReactReplView(args: ReactReplPropsT) {
    const lines = args.lines;
    const title = args.title;
    const tabs = args.tabs;
    const selectedTab = args.selectedTab;
    const onClear = args.onClear;
    const height = args.height;
	// function onClick (){
	//     return (stealFocus ? inputRef.current?.focus() : null)
	// }
	// function effectOne() {
	//     if (!terminalContentRef.current) {
	//         return
	//     }
	//     return terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight
	// }

	function effectHistory() {
            setHistorySelectIndex(-1)
	}
	const inputRef = useRef<HTMLInputElement>(null);
				   const terminalContentRef = useRef<HTMLDivElement>(null);
									const [activeInputValue, setActiveInputValue] = useState<string>("");
																    const [historySelectIndex, setHistorySelectIndex] = useState<number>(-1);
																								    //    useEffect(effectOne, [lines]);
																								    useEffect(effectHistory, [lines]);
																								    return (
																								    <Container >
																									{
                //onClick=onClick
                (title || tabs) && (
                    <Header>
                        <Title>{title}</Title>
                        {tabs && (
                            <Tabs>
                                {tabs.map((tab:string) => (
                                    <Tab
                                        className={tab === selectedTab ? "selected" : ""}
                                        onClick={(e) => {
                                            //onChangeTab(tab)
                                            e.stopPropagation()
                                            e.preventDefault()
                                        }}
                                        key={tab}
                                    >
                                        {tab}
                                    </Tab>
                                ))}
                                {onClear && <Tab onClick={onClear}>Clear</Tab>}
                            </Tabs>
                        )}
                    </Header>
                )}
            <TerminalContent height={height} ref={terminalContentRef}>
                {lines.map((line:LineT, i:number) =>
                    line.type === "input" ? (
                        <InputLine key={i}>
                            <InputCarat>{">"}</InputCarat>
                            {line.value}
                        </InputLine>
                    ) : line.type === "output" ? (
                        <Output key={i}>{line.value}</Output>
                    ) : (
                        <Error key={i}>{line.value.toString()}</Error>
                    )
                )}
                <ActiveInputLine>
                    <InputCarat>{">"}</InputCarat>
                    <TextInput
                        onKeyUp={(e) => {
                            if (e.key === "Enter") {
                                //onSubmit(activeInputValue)
                                setActiveInputValue("")
                            } else if (e.key === "ArrowUp") {
                                const newHSI = historySelectIndex + 1
                                const inputs = lines.filter((l) => l.type === "input")
                                inputs.reverse()
                                if (newHSI < inputs.length) {
                                    setActiveInputValue(inputs[newHSI].value)
                                    setHistorySelectIndex(newHSI)
                                }
                            } else if (e.key === "ArrowDown") {
                                const newHSI = historySelectIndex - 1
                                const inputs = lines.filter((l) => l.type === "input")
                                inputs.reverse()
                                if (newHSI >= 0) {
                                    setActiveInputValue(inputs[newHSI].value)
                                    setHistorySelectIndex(newHSI)
                                }
                            }
                        }}
                        onChange={(e) => setActiveInputValue(e.target.value)}
                        value={activeInputValue}
                        ref={inputRef}
                    />
                </ActiveInputLine>
            </TerminalContent>
        </Container>
    )
																								    };

																								    //export default ReactReplView;