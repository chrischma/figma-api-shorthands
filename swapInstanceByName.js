  function swapInstanceByName(layerName, instanceName) {

    // finding the layer and the instance by their names
    let currLayer = figma.currentPage.findOne(n => n.name === layerName);
    let newInstance = figma.currentPage.findOne(n => n.name === instanceName)

    console.log(`swapping instance for layer ${layerName} to ${instanceName}`)

    // applying instance to component
    currLayer.swapComponent(newInstance)
  }

  // example
  swapInstance('(Name of your layer)', 'Name of the instance to use')
