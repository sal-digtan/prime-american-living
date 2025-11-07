// Import React dependencies.
import React, { useCallback, useState } from 'react'
// Import the Slate editor factory.
import { createEditor } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'
// Import the `Editor` and `Transforms` helpers from Slate.
import { Editor, Transforms, Element } from 'slate'


const initialValue = [
    {
        type: 'paragraph',
        children: [{ text: 'Hi, Mary Cooper! \nThanks for your invitation for the account manager position for you company. \nI Will back to you soon with all the require documents.' }],
    },
]

const CustomEditor = () => {

    // Create a Slate editor object that won't change across renders.
    const [editor] = useState(() => withReact(createEditor()))

    // Define a rendering function based on the element passed to `props`. We use
    // `useCallback` here to memoize the function for subsequent renders.
    const renderElement = useCallback(props => {
        switch (props.element.type) {
            case 'code':
                return <CodeElement {...props} />
            default:
                return <DefaultElement {...props} />
        }
    }, [])

    // Define a leaf rendering function that is memoized with `useCallback`.
    const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
    }, [])

    return (
        <div>
            <Slate editor={editor} initialValue={initialValue}>
                <Editable
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    onKeyDown={event => {
                        if (!event.ctrlKey) {
                            return
                        }

                        switch (event.key) {
                            // When "`" is pressed, keep our existing code block logic.
                            case '`': {
                                event.preventDefault()
                                const [match] = Editor.nodes(editor, {
                                    match: n => n.type === 'code',
                                })
                                Transforms.setNodes(
                                    editor,
                                    { type: match ? 'paragraph' : 'code' },
                                    {
                                        match: n => Element.isElement(n) && Editor.isBlock(editor, n),
                                    }
                                )
                                break
                            }

                            // When "B" is pressed, bold the text in the selection.
                            case 'b': {
                                event.preventDefault()
                                Editor.addMark(editor, 'bold', true)
                                break
                            }
                        }
                    }}
                />
            </Slate>
        </div>
    )
}

// Define a React component renderer for our code blocks.
const CodeElement = props => {
    return (
        <pre {...props.attributes}>
            <code>{props.children}</code>
        </pre>
    )
}

const DefaultElement = props => {
    return <p {...props.attributes}>{props.children}</p>
}

const Leaf = props => {
    return (
        <span
            {...props.attributes}
            style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
        >
            {props.children}
        </span>
    )
}

export default CustomEditor