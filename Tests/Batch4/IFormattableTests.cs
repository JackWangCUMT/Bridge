using Bridge.Test;
using System;

namespace Bridge.ClientTest.Batch4
{
    [TestFixture(TestNameFormat = "IFormattableTests - {0}")]
    public class IFormattableTests
    {
        private class MyFormatProvider : IFormatProvider
        {
            public object GetFormat(Type formatType)
            {
                return "The provider";
            }
        }

        private class MyFormattable : IFormattable
        {
            public string Format(string format, IFormatProvider provider)
            {
                return format + " success, " + provider.GetFormat(typeof(object));
            }
        }

        [Test]
        public void IFormattableIsRecordedInInterfaceList()
        {
            Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(MyFormattable)));
            Assert.True((object)new MyFormattable() is IFormattable);
        }

        [Test]
        public void CallingMethodThroughIFormattableInterfaceInvokesImplementingMethod_SPI_1565_1633()
        {
            // #1633
            Assert.AreEqual("real success, The provider", new MyFormattable().Format("real", new MyFormatProvider()), "Non-interface call should succeed");
            // #1565
            Assert.AreEqual("real success, The provider", ((IFormattable)new MyFormattable()).Format("real", new MyFormatProvider()), "Interface call should succeed");
        }
    }
}
