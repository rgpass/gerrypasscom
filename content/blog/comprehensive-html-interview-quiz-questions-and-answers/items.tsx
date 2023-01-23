import { Code } from "@chakra-ui/react"
import React, { ReactNode } from "react"
import { CodeHighlight } from "../../../src/components/mdx-components/CodeHighlight"

interface Item {
  question: ReactNode
  answer: ReactNode
}

export const overviewItems: Item[] = [
  {
    question: "What does HTML stand for?",
    answer: "HyperText Markup Language",
  },
  {
    question: "HTML is the standard markup language for creating...",
    answer: "Web pages",
  },
  {
    question: "What organization makes the Web standards?",
    answer: "World Wide Web Consortium (W3C)",
  },
  {
    question: "What two things do you need to create a webpages and view them?",
    answer: "A web browser and a text editor",
  },
  {
    question: "When was HTML5 released?",
    answer: "October 2014",
  },
]

export const terminologyItems: Item[] = [
  {
    question: "What is the difference between HTML elements and tags?",
    answer:
      "An element consists of: opening tag, content, closing tag. Tags mark the beginning and end of elements.",
  },
  {
    question: "What is called an element that does not have a closing tag?",
    answer: "An empty element",
  },
  {
    question:
      "What is the difference between an empty element and a void element?",
    answer:
      "An empty element is an element that does not have any content. A void element is an empty element that cannot have any content.",
  },
  {
    question: "What is a HTML element attribute?",
    answer: "A modifier of an HTML element.",
  },
  {
    question: (
      <>
        <Code>onblur</Code> and <Code>onfocus</Code> are
      </>
    ),
    answer: "Event attributes",
  },
]

export const syntaxItems: Item[] = [
  {
    question: "Which doctype is used for HTML5?",
    answer: <Code>{"<!DOCTYPE html>"}</Code>,
  },
  {
    question: "Where does the doctype go?",
    answer: "As the first line of the document",
  },
  {
    question:
      "Which element defines the title of a document? Which element must be the parent of this element?",
    answer: (
      <>
        <Code>{"<title>"}</Code>, <Code>{"<head>"}</Code>
      </>
    ),
  },
  {
    question: "Where is the text of the title element displayed?",
    answer: "In the browser's title bar",
  },
  {
    question: (
      <>
        What are the main uses of <Code>meta</Code> tags?
      </>
    ),
    answer:
      "1. Tell search engines about the page contents. 2. Define what shows up in page link previews (via OpenGraph).",
  },
  {
    question: "What are HTML entities used for?",
    answer: "To display reserved characters, such as <, >, and ©.",
  },
  {
    question:
      "One common HTML entity is the ampersand. What does it look like?",
    answer: <Code>{"&amp;"}</Code>,
  },
  {
    question: "Which character is used to indicate an end tag?",
    answer: <Code>/</Code>,
  },
  {
    question: "What do HTML comments look like?",
    answer: <Code>{"<!-- comment goes here -->"}</Code>,
  },
]

export const semanticItems: Item[] = [
  {
    question: "What is semantic HTML?",
    answer: (
      <>
        HTML that uses tags to describe the meaning of the content, rather than
        just the appearance. For example, <Code>strong</Code> is used to
        indicate that the text is important, rather than using <Code>b</Code>.
      </>
    ),
  },
  {
    question:
      "What are some examples of semantic HTML tags related to page structure?",
    answer: (
      <>
        <Code>header</Code>, <Code>nav</Code>, <Code>main</Code>,{" "}
        <Code>section</Code>, <Code>article</Code>, <Code>footer</Code>
      </>
    ),
  },
  {
    question: "What are some examples of semantic HTML tags related to text?",
    answer: (
      <>
        <Code>strong</Code>, <Code>em</Code>, <Code>mark</Code>,{" "}
        <Code>del</Code>, <Code>ins</Code>, <Code>sub</Code>, <Code>sup</Code>
      </>
    ),
  },
  {
    question: "What are some examples of semantic HTML tags related to images?",
    answer: (
      <>
        <Code>figure</Code>, <Code>figcaption</Code>, <Code>picture</Code>,{" "}
        <Code>source</Code>
      </>
    ),
  },
  {
    question: "What is the correct HTML element for important/bold text?",
    answer: <Code>strong</Code>,
  },
  {
    question: "What is the correct HTML element for emphasized/italic text?",
    answer: <Code>em</Code>,
  },
  {
    question: (
      <>
        <Code>header</Code> and <Code>footer</Code> can be either the
        header/footer for...
      </>
    ),
    answer: (
      <>
        The document or the <Code>section</Code>
      </>
    ),
  },
  {
    question: (
      <>
        <Code>{"<nav>"}</Code> is used to represent...
      </>
    ),
    answer: "Navigation links",
  },
  {
    question: (
      <>
        <Code>{"<aside>"}</Code> is used to represent...
      </>
    ),
    answer: "Content that is related to the main content but not essential",
  },
  {
    question: (
      <>
        <Code>{"<section>"}</Code> is used to represent...
      </>
    ),
    answer: "A section of the document",
  },
  {
    question: (
      <>
        <Code>{"<article>"}</Code> is used to represent...
      </>
    ),
    answer:
      "an independent, self-contained chunk of content. This could be a blog post, a forum post, a news article, or a comment.",
  },
  {
    question: (
      <>
        What is the difference between <Code>section</Code> and{" "}
        <Code>article</Code>?
      </>
    ),
    answer: (
      <>
        <Code>section</Code> is used to group related content, while{" "}
        <Code>article</Code> is used to group independent, self-contained
        content.
      </>
    ),
  },
]

export const tableItems: Item[] = [
  {
    question: "What are the elements used in tables?",
    answer: (
      <ul>
        <li>
          <Code>table</Code> -- defines the table
        </li>
        <li>
          <Code>thead</Code> -- groups the header content
        </li>
        <li>
          <Code>tbody</Code> -- groups the body content
        </li>
        <li>
          <Code>tfoot</Code> -- groups the footer content
        </li>
        <li>
          <Code>tr</Code> -- defines a row
        </li>
        <li>
          <Code>th</Code> -- defines a header cell
        </li>
        <li>
          <Code>td</Code> -- defines a body or footer cell
        </li>
        <li>
          <Code>caption</Code> -- adds a short description above the table
        </li>
        <li>
          <Code>colgroup</Code> -- defines a group of columns for formatting
        </li>
        <li>
          <Code>col</Code> -- used with <Code>colgroup</Code> to specify column
          for formatting
        </li>
      </ul>
    ),
  },
  {
    question: (
      <>
        What attribute of the <Code>td</Code> tag is used to merge table cells
        together?
      </>
    ),
    answer: <Code>colspan</Code>,
  },
  {
    question: "Is it possible to have a table within a table?",
    answer: "Yes",
  },
]

export const formItems: Item[] = [
  {
    question: "Why do we have forms in HTML?",
    answer: "For data exchange between the user and the server.",
  },
  {
    question: "What are the new form input types in HTML5?",
    answer: (
      <>
        <Code>color</Code>, <Code>date</Code>, <Code>datetime-local</Code>,{" "}
        <Code>email</Code>, <Code>month</Code>, <Code>number</Code>,{" "}
        <Code>range</Code>, <Code>search</Code>, <Code>tel</Code>,{" "}
        <Code>time</Code>, <Code>url</Code>, <Code>week</Code>
      </>
    ),
  },
  {
    question:
      "What input type do you use if you want to submit it but not show it?",
    answer: <Code>hidden</Code>,
  },
  {
    question: "What do you add to a button to make it submit the form?",
    answer: <Code>type="submit"</Code>,
  },
  {
    question: "What is the standard HTML for a dropdown list?",
    answer: (
      <Code>{'<select><option value="1">Option 1</option></select>'}</Code>
    ),
  },
  {
    question: "Which attribute specifies the input must be filled out?",
    answer: <Code>required</Code>,
  },
  {
    question: (
      <>
        What is the input type <Code>image</Code> used for?
      </>
    ),
    answer: "To submit a form using an image as the submit button.",
  },
  {
    question: (
      <>
        What does the <Code>datalist</Code> tag do?
      </>
    ),
    answer:
      "It provides a list of pre-defined options for an input field, while still allowing for typing in of a non-pre-defined option.",
  },
]

export const imageItems: Item[] = [
  {
    question: "Which attribute specifies an alternate text for an image?",
    answer: <Code>alt</Code>,
  },
  {
    question: (
      <>
        What is the <Code>canvas</Code> element used for?
      </>
    ),
    answer: "To draw graphics, on the fly, via scripting (usually JavaScript).",
  },
  {
    question: (
      <>
        What is the <Code>figure</Code> element? What element is used in tandem?
      </>
    ),
    answer: (
      <>
        <Code>figure</Code> is used to group media content and its caption. It
        is used in tandem with <Code>figcaption</Code> to add a caption either
        above or below the image.
      </>
    ),
  },
]

export const differenceItems: Item[] = [
  {
    question: "Inline elements vs block elements",
    answer:
      "Inline elements are displayed on the same line as other content and their width is determined by the content. Block elements are displayed on their own line and their width is determined by the width of their container.",
  },
  {
    question: (
      <>
        <Code>a</Code> vs <Code>link</Code>?
      </>
    ),
    answer: (
      <>
        <Code>a</Code> is used to create a link to another page or another part
        of the same page. <Code>link</Code> is used to link to an external
        stylesheet.
      </>
    ),
  },
  {
    question: (
      <>
        <Code>ul</Code> vs <Code>ol</Code>?
      </>
    ),
    answer: (
      <>
        <Code>ul</Code> is used to create an unordered list, where the bullets
        will be regular circles. <Code>ol</Code> is used to create an ordered
        list, where the bullets will be incrementing numbers.
      </>
    ),
  },
  {
    question: (
      <>
        <Code>input</Code> with type <Code>text</Code> vs <Code>password</Code>?
      </>
    ),
    answer: (
      <>
        <Code>text</Code> will display the text as it is being typed.{" "}
        <Code>password</Code> will display dots instead of the text to protect
        the user from others seeing their password.
      </>
    ),
  },
  {
    question: (
      <>
        <Code>input</Code> with type <Code>text</Code> vs <Code>textarea</Code>?
      </>
    ),
    answer: (
      <>
        <Code>text</Code> is used for a single line of text.{" "}
        <Code>textarea</Code> is used for multiple lines of text.
      </>
    ),
  },
  {
    question: (
      <>
        <Code>meter</Code> vs <Code>slider</Code>?
      </>
    ),
    answer: (
      <>
        <Code>meter</Code> is used to show a scalar measurement within a known
        range. <Code>slider</Code> is used to select a value from a range.
      </>
    ),
  },
  {
    question: (
      <>
        <Code>meter</Code> vs <Code>progress</Code>?
      </>
    ),
    answer: (
      <>
        <Code>meter</Code> is used to show a scalar measurement within a known
        range. <Code>progress</Code> is used to show the progress of a task and
        is typically used with JavaScript to update in realtime.
      </>
    ),
  },
]

export const miscellaneousItems: Item[] = [
  {
    question:
      "What are the different levels of headings in HTML? Which one is the biggest?",
    answer: (
      <>
        <Code>h1</Code> through <Code>h6</Code>
      </>
    ),
  },
  {
    question: (
      <>
        What is the font-size of the <Code>h1</Code> tag?
      </>
    ),
    answer: "2em",
  },
  {
    question: "What attribute is used to add a link to any element?",
    answer: <Code>href</Code>,
  },
  {
    question:
      "What element is used to specify a section of text that is quoted from another source?",
    answer: <Code>blockquote</Code>,
  },
  {
    question: "What element is used to add a line break?",
    answer: <Code>br</Code>,
  },
  {
    question: "What are the list types in HTML?",
    answer: (
      <ul>
        <li>
          <Code>ul</Code> -- unordered list
        </li>
        <li>
          <Code>ol</Code> -- ordered list
        </li>
        <li>
          <Code>dl</Code> -- definition list
        </li>
      </ul>
    ),
  },
  {
    question: "Which element is used to display a web page within a web page?",
    answer: <Code>iframe</Code>,
  },
  {
    question: "Which element is used for playing video files?",
    answer: <Code>video</Code>,
  },
  {
    question: "Which element is used for playing audio/sound files?",
    answer: <Code>audio</Code>,
  },
  {
    question: (
      <>
        What is the <Code>ruby</Code> element? What spoken language uses this
        often?
      </>
    ),
    answer: (
      <>
        The <Code>ruby</Code> element is used to add annotations to East Asian
        characters. Japanese uses this often.
      </>
    ),
  },
  {
    question: (
      <>
        What does the global attribute <Code>contenteditable</Code> do?
      </>
    ),
    answer: "This attribute allows the user to edit the content of an element.",
  },
  {
    question: "Which element is used to strikethrough text?",
    answer: <Code>del</Code>,
  },
]

export const miniCodeChallengeItems: Item[] = [
  {
    question: `Create a link where the text is "Google" and on click, it opens a new tab to Google's homepage`,
    answer: (
      <Code>{`<a href="https://www.google.com/ target="_blank">Google</a>`}</Code>
    ),
  },
  {
    question: `Write "H2O" where the "2" is a subscript`,
    answer: <Code>{`H<sub>2</sub>O`}</Code>,
  },
  {
    question: `Show the image of "https://placekitten.com/200/300" where the fallback text is "A cute kitten"`,
    answer: (
      <Code>{`<img src="https://placekitten.com/200/300" alt="A cute kitten">`}</Code>
    ),
  },
  // Create a table with a header, 3 columns, caption, 2 rows, a footer, and a merged cell. Style the first two columns with a background color.
  {
    question: `Create a table with a header, 3 columns, caption, 2 rows, a footer, and a merged cell. Style the first two columns with a background color. Have the second row be one cell.`,
    answer: (
      <>
        My apologies for formatting. Try copy-pasting the following into an
        editor and formatting.
        <br />
        <br />
        <Code>{`
<table>
  <caption>Table Caption</caption>
  <colgroup>
    <col span="2" style="background-color: red">
  </colgroup>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 3</td>
    </tr>
    <tr>
      <td colspan="3">Row 2, merged</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer 1</td>
      <td>Footer 2</td>
      <td>Footer 3</td>
    </tr>
  </tfoot>
</table>
  `}</Code>
      </>
    ),
  },
  {
    question: "Create a picture that changes sources by supported formats.",
    answer: (
      <>
        My apologies for formatting. Try copy-pasting the following into an
        editor and formatting.
        <br />
        <br />
        <Code>{`
<picture>
  <source srcset="https://placekitten.com/800/1200" type="image/avif">
  <source srcset="https://placekitten.com/400/600" type="image/webp">
  <img src="https://placekitten.com/200/300" alt="A cute kitten">
</picture>
        `}</Code>
      </>
    ),
  },
  {
    question: "Create a picture that changes sources by screen density.",
    answer: (
      <Code>{`
<img srcset="https://html.com/wp-content/uploads/flamingo4x.jpg 4x, https://html.com/wp-content/uploads/flamingo3x.jpg 3x, https://html.com/wp-content/uploads/flamingo2x.jpg 2x, https://html.com/wp-content/uploads/flamingo1x.jpg 1x " src="https://html.com/wp-content/uploads/flamingo-fallback.jpg" >
      `}</Code>
    ),
  },
]
