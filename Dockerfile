FROM node
# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json ./

# Install project dependencies
RUN npm install

# Copy all project files to the container
COPY . .

# Build the React app
RUN npm run build

# Expose a port (e.g., 80) that your app will run on
EXPOSE 3000

# Define the command to run your app
# CMD ["npm", "start"]

 CMD ["npm", "run", "dev"]

# COPY package.json package.json
# COPY package-lock.json package-lock.json
# COPY . .
# RUN npm install
# CMD npm run dev
# ENTRYPOINT [ "node" "./src/main.jsx" ]