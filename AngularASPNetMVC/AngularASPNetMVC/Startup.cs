using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularASPNetMVC.Startup))]
namespace AngularASPNetMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
