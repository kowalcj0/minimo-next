import { liteClient } from 'algoliasearch/lite'

import {
  appendResults,
  getUrlSearchParam,
  setSearchingIndicator
} from './helpers'

const { appId, indexName, searchApiKey } = window.algolia

const client = liteClient(appId, searchApiKey)

const doSearch = (term, resultsBlock) => {
  setSearchingIndicator(resultsBlock)

  if (!term) {
    appendResults([], resultsBlock)
  } else {
    client
      .searchForHits({
        requests: [
          {
            indexName: `${indexName}${window.location.pathname.replace('/search/', '')}`,
            query: term,
            attributesToRetrieve: ['title', 'href'],
            hitsPerPage: 10
          }
        ]
      })
      .then(({ results }) => {
        appendResults(results[0].hits, resultsBlock)
      })
      .catch(err => {
        console.error(err)
      })
  }
}

const searchForm = document.getElementById('search-form')
const searchInputBox = document.getElementById('search-term')
const resultsBlock = document.getElementById('search-results')

let term = getUrlSearchParam('q')
searchInputBox.value = term
searchInputBox.focus()
doSearch(term, resultsBlock)

searchForm.addEventListener('submit', e => {
  e.preventDefault()

  doSearch(searchInputBox.value, resultsBlock)
})