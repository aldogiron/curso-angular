using System;

namespace Backend.Api.Exceptions
{
    public class AutenticacionException : Exception
    {
        public AutenticacionException(string message) : base(message)
        {
        }
    }
}