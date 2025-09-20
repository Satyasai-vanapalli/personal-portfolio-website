# Use the official Tomcat image
FROM tomcat:9.0

# Copy your portfolio into a new folder named 'portfolio'
COPY src/ /usr/local/tomcat/webapps/portfolio/

# Expose the default Tomcat port
EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]