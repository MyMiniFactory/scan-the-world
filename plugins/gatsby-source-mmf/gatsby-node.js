const fetch = require("node-fetch")
const queryString = require("query-string")

exports.sourceNodes = (
	{ actions, createNodeId, createContentDigest },
	configOptions
) => {
	const { createNode } = actions
	const { name, ...apiOptions } = configOptions
	// Gatsby adds a configOption that's not need for this plugin, delete it
	delete configOptions.plugins
	// Helper function that processes a object to match Gatsby's node structure
	const processObject = object => {
		const nodeId = createNodeId(`mmf-object-${object.id}`)
		const nodeContent = JSON.stringify(object)
		const nodeData = Object.assign({}, object, {
			id: nodeId,
			parent: null,
			children: [],
			internal: {
				type: name,
				content: nodeContent,
				contentDigest: createContentDigest(object),
			}
		})
		return nodeData
	}

	// Convert the options object into a query string
	const {url, ...query} = apiOptions
	const urlOptions = queryString.stringify(query)
	// Join apiOptions with the MyMiniFactory API URL
	const apiUrl = `${url}?${urlOptions}`
	// Gatsby expects sourceNodes to return a promise
	return (
		// Parse a response from the apiUrl
		fetch(apiUrl)
				// Parse the response as JSON
				.then(response => {
					if (response.ok) {
						return response.json()
					}
					throw new Error('Network response was not ok.')
				})
				// Process the JSON data into a node
				.then(data => {
					// For each query result
					data.items.forEach(item => {
						// Process the mmf data to match the structure of Gatsby node
						const nodeData = processObject(item)
						// Use Gatsby's createNode helper to create a node from the node data
						createNode(nodeData)
					})
				}).catch( error => console.log('There has been a problem with fetch operation', error.message))
	)
}
