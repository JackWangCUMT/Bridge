﻿namespace Bridge.CLR.Html 
{
    /// <summary>
    /// The CaretPosition interface represents the caret postion, an indicator for the text insertion point. You can get a CaretPosition using the document.caretPositionFromPoint method.
    /// </summary>
	[Bridge.CLR.Ignore]
    [Bridge.CLR.Name("CaretPosition")]
    public class CaretPosition 
    {
		internal CaretPosition() 
        {
		}				

        /// <summary>
        /// Returns a Node containing the found node at the caret's position.
        /// </summary>
        public readonly Node OffsetNode;

        /// <summary>
        /// Returns a long representing the character offset in the caret position node.
        /// </summary>
        public readonly int Offset;
	}
}