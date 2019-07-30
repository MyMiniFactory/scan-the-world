const fetch = require("node-fetch")
const queryString = require("query-string")

exports.sourceNodes = (
	{ actions, createNodeId, createContentDigest },
	configOptions
) => {
	const { createNode } = actions
	const { name, url } = configOptions
	delete configOptions.plugins

	const processObject = (object, index, type) => {
		const nodeId = createNodeId(`mmf-object-map-${type}-${index}`)
		const nodeContent = JSON.stringify(object)
		const nodeData = Object.assign({}, object, {
			id: nodeId,
			parent: null,
			children: [],
			internal: {
				type: name + type,
				content: nodeContent,
				contentDigest: createContentDigest(object),
			}
		})
		return nodeData
	}

	return (
		fetch(url)
				.then(response => {
					if (response.ok) {
						return response.json()
					}
					throw new Error('Network response was not ok.')
				})
				.then(data => {
					data.places.forEach((place, i) => {
						const nodeData = processObject(place, i, 'Place')
						createNode(nodeData)
					})
					data.objects.forEach((object, i) => {
						const nodeData = processObject(object, i, 'Object')
						createNode(nodeData)
					})
				}).catch( error => console.log('There has been a problem with fetch operation', error.message))
	)
}
