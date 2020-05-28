function generateMrmr (options) {
  // define things user might want
  const target = ['工程師', '設計師', '創業家']
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  // define dummy data
  // create a collection to store things user picked up = dict
  let collection = []
  let collectionEasy = []
  let collectionTarget = []
  // collection = collection.concat(target)
  if (options.engineer === 'on') {
    collection = collection.concat(task.engineer)
    collectionEasy = collectionEasy.concat(phrase)
    collectionTarget = collectionTarget.concat(target[0])
  }

  if (options.designer === 'on') {
    collection = collection.concat(task.designer)
    collectionEasy = collectionEasy.concat(phrase)
    collectionTarget = collectionTarget.concat(target[1])
  }

  if (options.entrepreneur === 'on') {
    collection = collection.concat(task.entrepreneur)
    collectionEasy = collectionEasy.concat(phrase)
    collectionTarget = collectionTarget.concat(target[2])
  }
  // return error
  if (options.engineer !== 'on' && options.designer !== 'on' && options.entrepreneur !== 'on') {
    return '請記得勾選'
  }
  if (options.engineer === 'on' && options.designer === 'on') {
    return '只能選擇一種職業'
  }
  if (options.entrepreneur === 'on' && options.designer === 'on') {
    return '只能選擇一種職業'
  }
  if (options.engineer === 'on' && options.entrepreneur === 'on') {
    return '只能選擇一種職業'
  }

  // start generating mrmr
  function sample (collection) {
    const randomIndex = Math.floor(Math.random() * collection.length)
    return collection[randomIndex]
  }
  function easy (collectionEasy) {
    const randomEasy = Math.floor(Math.random() * collectionEasy.length)
    return collectionEasy[randomEasy]
  }
  let mrmr = ''
  mrmr += collectionTarget.toString() + ' ' + sample(collection) + ' ' + '應該' + easy(collectionEasy) + '吧～'
  // return password
  return mrmr
}
// export gnerateMrmr
module.exports = generateMrmr
