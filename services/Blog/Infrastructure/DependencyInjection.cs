using Application.Interfaces;
using Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
        {
            if (configuration.GetValue<bool>("UseInMemoryDatabase"))
            {
                services.AddDbContext<AppDbContext>(options => options.UseInMemoryDatabase("clivetran.xyz"));
            }
            else
            {
                services.AddDbContext<AppDbContext>(options =>
                {
                    options.UseSqlServer(
                        configuration.GetConnectionString("DefaultConnection"),
                        b => b.MigrationsAssembly(typeof(AppDbContext).Assembly.FullName));
                });
            }

            services.AddScoped<IPostRepository, PostRepository>();

            return services;
        }

        public static IHealthChecksBuilder AddDbContextCheck(this IHealthChecksBuilder builder)
        {
            builder.AddDbContextCheck<AppDbContext>();

            return builder;
        }
    }
}
