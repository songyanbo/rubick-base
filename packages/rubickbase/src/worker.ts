import newRustBackend, { RustBackendAPI } from './backend'
import { defaultLogger } from './logger'
import { Logger, WorkerSettings, Workers } from './types'

export class RubickWorker {
	rustBackend!: RustBackendAPI
	logger: Logger
	port: string
	started: boolean
	constructor(workerSettings: WorkerSettings) {
		const { port, logger } = workerSettings
		this.port = port?.toString() || '50068'
		this.logger = logger || defaultLogger
		this.started = false
	}

	private log = (success: boolean, name: string) => {
		if (success) {
			this.logger.success(`Start ${name} worker`)
		} else {
			this.logger.error(`Start ${name} worker`)
		}
	}

	async start(workerName?: Workers) {
		if (!this.started) {
			this.rustBackend = await newRustBackend()
		}
		if (workerName) {
			switch (workerName) {
				case 'ioio':
					this.log(await this.rustBackend?.ioioStart(this.port), 'ioio')
					break
			}
		} else {
			this.log(await this.rustBackend?.ioioStart(this.port), 'ioio')
		}
	}
}
